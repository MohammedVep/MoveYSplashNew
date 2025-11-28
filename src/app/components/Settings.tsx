'use client';

import { ChangeEvent, FormEvent, useCallback, useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Separator } from './ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { ScrollArea } from './ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Slider } from './ui/slider';
import { Badge } from './ui/badge';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from './ui/dialog';
import {
  User,
  Lock,
  Bell,
  Shield,
  HelpCircle,
  Info,
  Palette,
  Volume2,
  Camera,
  Mail,
  Phone,
  MapPin,
  Trash2,
  LogOut,
  Save,
  X,
  Check,
  AlertCircle
} from 'lucide-react';
import { toast } from 'sonner';
import {
  notificationManager,
  requestNotificationPermission,
  isNotificationSupported,
  getNotificationPermission
} from '../utils/notifications';
import { useUser, defaultSettings, UserSettings, resolveFontSizePreference } from '../utils/userContext';
import {
  THEME_OPTIONS,
  ThemePreference,
  normalizeThemePreference,
  resolveThemePreference
} from './settings-theme';

export type SettingsTabKey = 'account' | 'privacy' | 'notifications' | 'appearance' | 'about';

export interface SettingsProps {
  onClose?: () => void;
  onLogout?: () => void;
  initialTab?: SettingsTabKey;
  onOpenHelpCenter?: () => void;
  onOpenPrivacyPolicy?: () => void;
  onOpenTermsOfService?: () => void;
}

export function Settings({
  onClose,
  onLogout,
  initialTab,
  onOpenHelpCenter,
  onOpenPrivacyPolicy,
  onOpenTermsOfService
}: SettingsProps) {
  const { currentUser, updateUser, updateSettings, changePassword } = useUser();
  const { setTheme } = useTheme();

  const [accountForm, setAccountForm] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    location: '',
    bio: ''
  });
  const [accountDirty, setAccountDirty] = useState(false);
  const [settingsState, setSettingsState] = useState<UserSettings>(() => ({
    ...defaultSettings
  }));
  const [themePreference, setThemePreference] = useState<ThemePreference>(
    normalizeThemePreference(defaultSettings.theme)
  );
  const [isSavingAccount, setIsSavingAccount] = useState(false);
  const [browserNotificationPermission, setBrowserNotificationPermission] =
    useState<NotificationPermission>('default');
  const [isRequestingPermission, setIsRequestingPermission] = useState(false);
  const soundVolumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isPasswordDialogOpen, setIsPasswordDialogOpen] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  useEffect(() => {
    if (isNotificationSupported()) {
      setBrowserNotificationPermission(getNotificationPermission());
    }
  }, []);

  useEffect(() => {
    if (!currentUser) {
      return;
    }

    const mergedSettings: UserSettings = {
      ...defaultSettings,
      ...(currentUser.settings ?? {})
    };
    const normalizedTheme = normalizeThemePreference(currentUser.settings?.theme);
    const normalizedFontSize = resolveFontSizePreference(mergedSettings.fontSize);
    mergedSettings.theme = normalizedTheme;
    mergedSettings.fontSize = normalizedFontSize;
    mergedSettings.language = 'en';

    setSettingsState(mergedSettings);
    setThemePreference(normalizedTheme);

    if (!accountDirty) {
      setAccountForm({
        name: currentUser.name ?? '',
        email: currentUser.email ?? '',
        phoneNumber: mergedSettings.phoneNumber ?? '',
        location: currentUser.location ?? '',
        bio: currentUser.bio ?? ''
      });
    }
  }, [currentUser, accountDirty]);

  useEffect(() => {
    const applyTheme = () => {
      setTheme(resolveThemePreference(themePreference));
    };

    applyTheme();

    if (themePreference === 'dynamic') {
      const interval = setInterval(applyTheme, 10 * 60 * 1000);
      return () => clearInterval(interval);
    }

    return undefined;
  }, [themePreference, setTheme]);

  useEffect(
    () => () => {
      if (soundVolumeTimeoutRef.current) {
        clearTimeout(soundVolumeTimeoutRef.current);
      }
    },
    []
  );

  useEffect(() => {
    if (!isPasswordDialogOpen) {
      setPasswordForm({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
      setIsChangingPassword(false);
    }
  }, [isPasswordDialogOpen]);

  const handleSettingChange = useCallback(
    <K extends keyof UserSettings>(key: K, rawValue: UserSettings[K]) => {
      const nextValue = (() => {
        if (key === 'fontSize') {
          return resolveFontSizePreference(typeof rawValue === 'string' ? rawValue : undefined) as UserSettings[K];
        }

        if (key === 'language') {
          return 'en' as UserSettings[K];
        }

        if (key === 'theme' && typeof rawValue === 'string') {
          return normalizeThemePreference(rawValue) as UserSettings[K];
        }

        return rawValue;
      })();

      setSettingsState((previous) => ({
        ...previous,
        [key]: nextValue
      }));

      return updateSettings({ [key]: nextValue });
    },
    [updateSettings]
  );

  const handleThemeSelect = useCallback(
    (value: string) => {
      const preference = normalizeThemePreference(value);
      setThemePreference(preference);
      setSettingsState((previous) => ({
        ...previous,
        theme: preference
      }));
      setTheme(resolveThemePreference(preference));
      void updateSettings({ theme: preference });
    },
    [setTheme, updateSettings]
  );

  const handleSoundVolumeChange = useCallback(
    (value: number[]) => {
      const volume = Math.max(0, Math.min(100, value[0] ?? 0));
      setSettingsState((previous) => ({
        ...previous,
        soundVolume: volume
      }));

      if (soundVolumeTimeoutRef.current) {
        clearTimeout(soundVolumeTimeoutRef.current);
      }

      soundVolumeTimeoutRef.current = setTimeout(() => {
        void updateSettings({ soundVolume: volume });
      }, 300);
    },
    [updateSettings]
  );

  const handlePasswordInputChange = useCallback(
    (field: keyof typeof passwordForm) => (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setPasswordForm((previous) => ({
        ...previous,
        [field]: value
      }));
    },
    []
  );

  const handlePasswordSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const { oldPassword, newPassword, confirmPassword } = passwordForm;

      if (!oldPassword || !newPassword || !confirmPassword) {
        toast.error('Please complete every password field');
        return;
      }

      if (newPassword.length < 8) {
        toast.error('New password must be at least 8 characters long');
        return;
      }

      if (newPassword === oldPassword) {
        toast.error('New password must be different from the old password');
        return;
      }

      if (newPassword !== confirmPassword) {
        toast.error('New password and confirmation do not match');
        return;
      }

      setIsChangingPassword(true);
      const result = await changePassword(oldPassword, newPassword);

      if (!result.success) {
        toast.error(result.error ?? 'Unable to change password right now');
        setIsChangingPassword(false);
        return;
      }

      toast.success('Password updated successfully');
      setIsPasswordDialogOpen(false);
      setIsChangingPassword(false);
    },
    [passwordForm, changePassword]
  );

  const handleAccountInputChange =
    (field: keyof typeof accountForm) => (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setAccountDirty(true);
      setAccountForm((previous) => ({
        ...previous,
        [field]: value
      }));
    };

  const handleSaveChanges = async () => {
    if (!currentUser) {
      toast.error('No user is signed in');
      return;
    }

    setIsSavingAccount(true);

    try {
      const updated = await updateUser({
        name: accountForm.name,
        email: accountForm.email,
        location: accountForm.location,
        bio: accountForm.bio
      });

      setSettingsState((previous) => ({
        ...previous,
        phoneNumber: accountForm.phoneNumber
      }));
      await updateSettings({ phoneNumber: accountForm.phoneNumber });

      if (updated) {
        setAccountDirty(false);
        toast.success('Settings saved successfully! ✨');
      } else {
        toast.error('Unable to save account changes');
      }
    } catch (error) {
      console.error('Error saving account settings:', error);
      toast.error('Unable to save settings right now');
    } finally {
      setIsSavingAccount(false);
    }
  };

  const handleDeleteAccount = () => {
    toast.error('Account deletion requires confirmation');
  };

  const handleRequestBrowserNotifications = useCallback(async () => {
    setIsRequestingPermission(true);
    try {
      const permission = await requestNotificationPermission();
      setBrowserNotificationPermission(permission);

      if (permission === 'granted') {
        toast.success('Browser notifications enabled! 🔔');
        await notificationManager.showSimple(
          'MoveSplash',
          'You will now receive browser notifications!'
        );
        void handleSettingChange('pushNotifications', true);
      } else if (permission === 'denied') {
        toast.error('Browser notifications blocked. Please enable them in your browser settings.');
        void handleSettingChange('pushNotifications', false);
      }
    } catch (error) {
      console.error('Error requesting notification permission:', error);
      toast.error('Unable to enable browser notifications');
    } finally {
      setIsRequestingPermission(false);
    }
  }, [handleSettingChange]);

  const handlePushNotificationsToggle = (value: boolean) => {
    if (value && isNotificationSupported() && browserNotificationPermission !== 'granted') {
      void handleRequestBrowserNotifications();
      return;
    }

    void handleSettingChange('pushNotifications', value);
  };

  if (!currentUser) {
    return (
      <div className="max-w-5xl mx-auto">
        <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6 text-white">
          <h2 className="text-xl font-semibold">Settings unavailable</h2>
          <p className="text-white/70 text-sm mt-2">
            Please sign in to manage your MoveSplash preferences.
          </p>
        </Card>
      </div>
    );
  }

  const settings = settingsState;

  return (
    <div className="max-w-5xl mx-auto">
      <Card className="backdrop-blur-xl bg-white/10 border-white/20 overflow-hidden">
        <div className="p-6 border-b border-white/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-white text-2xl">Settings</h1>
              <p className="text-white/60 text-sm">Manage your account and preferences</p>
            </div>
          </div>
          {onClose && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white/70 hover:text-white hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </Button>
          )}
        </div>

        <Tabs defaultValue={initialTab ?? 'account'} className="w-full">
          <div className="px-6 pt-4 border-b border-white/20">
            <TabsList className="w-full bg-white/5 border-white/20 grid grid-cols-5">
              <TabsTrigger value="account" className="data-[state=active]:bg-white/20">
                <User className="w-4 h-4 mr-2" />
                Account
              </TabsTrigger>
              <TabsTrigger value="privacy" className="data-[state=active]:bg-white/20">
                <Lock className="w-4 h-4 mr-2" />
                Privacy
              </TabsTrigger>
              <TabsTrigger value="notifications" className="data-[state=active]:bg-white/20">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </TabsTrigger>
              <TabsTrigger value="appearance" className="data-[state=active]:bg-white/20">
                <Palette className="w-4 h-4 mr-2" />
                Appearance
              </TabsTrigger>
              <TabsTrigger value="about" className="data-[state=active]:bg-white/20">
                <Info className="w-4 h-4 mr-2" />
                About
              </TabsTrigger>
            </TabsList>
          </div>

          <ScrollArea className="h-[500px]">
            <TabsContent value="account" className="p-6 space-y-6">
              <div className="space-y-3">
                <Label className="text-white">Profile Picture</Label>
                <div className="flex items-center gap-4">
                  <Avatar className="w-20 h-20 border-4 border-white/20">
                    <AvatarImage src={currentUser.avatar} />
                    <AvatarFallback>
                      {currentUser.name?.slice(0, 2).toUpperCase() || 'MS'}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0">
                      <Camera className="w-4 h-4 mr-2" />
                      Change Photo
                    </Button>
                    <p className="text-white/50 text-xs">JPG, PNG or GIF. Max size 5MB</p>
                  </div>
                </div>
              </div>

              <Separator className="bg-white/10" />

              <div className="space-y-4">
                <h3 className="text-white">Personal Information</h3>

                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white/70">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    value={accountForm.name}
                    onChange={handleAccountInputChange('name')}
                    className="bg-white/5 border-white/20 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white/70">
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                    <Input
                      id="email"
                      type="email"
                      value={accountForm.email}
                      onChange={handleAccountInputChange('email')}
                      className="pl-10 bg-white/5 border-white/20 text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white/70">
                    Phone Number
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                    <Input
                      id="phone"
                      value={accountForm.phoneNumber}
                      onChange={handleAccountInputChange('phoneNumber')}
                      className="pl-10 bg-white/5 border-white/20 text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location" className="text-white/70">
                    Location
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                    <Input
                      id="location"
                      value={accountForm.location}
                      onChange={handleAccountInputChange('location')}
                      className="pl-10 bg-white/5 border-white/20 text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio" className="text-white/70">
                    Bio
                  </Label>
                  <Input
                    id="bio"
                    value={accountForm.bio}
                    onChange={handleAccountInputChange('bio')}
                    className="bg-white/5 border-white/20 text-white"
                  />
                </div>
              </div>

              <Separator className="bg-white/10" />

              <div className="space-y-4">
                <h3 className="text-white">Password</h3>
                <Dialog open={isPasswordDialogOpen} onOpenChange={setIsPasswordDialogOpen}>
                  <DialogTrigger asChild>
                    <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10">
                      <Lock className="w-4 h-4 mr-2" />
                      Change Password
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-background/95 text-foreground border border-border backdrop-blur">
                    <DialogHeader>
                      <DialogTitle>Change password</DialogTitle>
                      <DialogDescription>
                        Enter your current password and choose a new one. Pick something unique to keep your account secure.
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handlePasswordSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password" className="text-sm font-medium text-foreground/80">
                          Current password
                        </Label>
                        <Input
                          id="current-password"
                          type="password"
                          value={passwordForm.oldPassword}
                          onChange={handlePasswordInputChange('oldPassword')}
                          autoComplete="current-password"
                          className="bg-input-background border border-border text-foreground"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password" className="text-sm font-medium text-foreground/80">
                          New password
                        </Label>
                        <Input
                          id="new-password"
                          type="password"
                          value={passwordForm.newPassword}
                          onChange={handlePasswordInputChange('newPassword')}
                          autoComplete="new-password"
                          className="bg-input-background border border-border text-foreground"
                          required
                          minLength={8}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password" className="text-sm font-medium text-foreground/80">
                          Confirm new password
                        </Label>
                        <Input
                          id="confirm-password"
                          type="password"
                          value={passwordForm.confirmPassword}
                          onChange={handlePasswordInputChange('confirmPassword')}
                          autoComplete="new-password"
                          className="bg-input-background border border-border text-foreground"
                          required
                          minLength={8}
                        />
                        <p className="text-foreground/60 text-xs">
                          Passwords must be at least 8 characters long.
                        </p>
                      </div>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button type="button" variant="ghost" disabled={isChangingPassword}>
                            Cancel
                          </Button>
                        </DialogClose>
                        <Button
                          type="submit"
                          disabled={isChangingPassword}
                          className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0 disabled:opacity-60"
                        >
                          {isChangingPassword ? 'Updating...' : 'Update Password'}
                        </Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  onClick={handleSaveChanges}
                  disabled={isSavingAccount}
                  className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0 disabled:opacity-60"
                >
                  <Save className="w-4 h-4 mr-2" />
                  {isSavingAccount ? 'Saving...' : 'Save Changes'}
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="privacy" className="p-6 space-y-6">
              <div className="space-y-4">
                <h3 className="text-white">Profile Visibility</h3>

                <div className="space-y-2">
                  <Label className="text-white/70">Who can see your profile?</Label>
                  <Select
                    value={settings.profileVisibility}
                    onValueChange={(value) => void handleSettingChange('profileVisibility', value)}
                  >
                    <SelectTrigger className="bg-white/5 border-white/20 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gradient-to-br from-purple-900 to-pink-900 border-white/20">
                      <SelectItem value="public">Everyone</SelectItem>
                      <SelectItem value="friends">Friends Only</SelectItem>
                      <SelectItem value="private">Only Me</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-white/70">Who can message you?</Label>
                  <Select
                    value={settings.whoCanMessage}
                    onValueChange={(value) => void handleSettingChange('whoCanMessage', value)}
                  >
                    <SelectTrigger className="bg-white/5 border-white/20 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gradient-to-br from-purple-900 to-pink-900 border-white/20">
                      <SelectItem value="everyone">Everyone</SelectItem>
                      <SelectItem value="friends">Friends Only</SelectItem>
                      <SelectItem value="nobody">Nobody</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-white/70">Who can call you?</Label>
                  <Select
                    value={settings.whoCanCall}
                    onValueChange={(value) => void handleSettingChange('whoCanCall', value)}
                  >
                    <SelectTrigger className="bg-white/5 border-white/20 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gradient-to-br from-purple-900 to-pink-900 border-white/20">
                      <SelectItem value="everyone">Everyone</SelectItem>
                      <SelectItem value="friends">Friends Only</SelectItem>
                      <SelectItem value="nobody">Nobody</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator className="bg-white/10" />

              <div className="space-y-4">
                <h3 className="text-white">Activity Status</h3>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-white/70">Show online status</Label>
                    <p className="text-white/50 text-sm">Let friends see when you&apos;re online</p>
                  </div>
                  <Switch
                    checked={settings.showOnlineStatus}
                    onCheckedChange={(value) => void handleSettingChange('showOnlineStatus', value)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-white/70">Read receipts</Label>
                    <p className="text-white/50 text-sm">Show when you&apos;ve read messages</p>
                  </div>
                  <Switch
                    checked={settings.showReadReceipts}
                    onCheckedChange={(value) => void handleSettingChange('showReadReceipts', value)}
                  />
                </div>
              </div>

              <Separator className="bg-white/10" />

              <div className="space-y-4">
                <h3 className="text-white">Tagging & Mentions</h3>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-white/70">Allow tagging</Label>
                    <p className="text-white/50 text-sm">Let friends tag you in posts and photos</p>
                  </div>
                  <Switch
                    checked={settings.allowTagging}
                    onCheckedChange={(value) => void handleSettingChange('allowTagging', value)}
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="notifications" className="p-6 space-y-6">
              {isNotificationSupported() && (
                <>
                  <Card className="backdrop-blur-xl bg-white/5 border-white/20 p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Bell className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-white">Browser Notifications</h4>
                          {browserNotificationPermission === 'granted' && (
                            <Badge className="bg-green-500/20 text-green-400 border-green-400/30">
                              <Check className="w-3 h-3 mr-1" />
                              Enabled
                            </Badge>
                          )}
                          {browserNotificationPermission === 'denied' && (
                            <Badge className="bg-red-500/20 text-red-400 border-red-400/30">
                              <X className="w-3 h-3 mr-1" />
                              Blocked
                            </Badge>
                          )}
                          {browserNotificationPermission === 'default' && (
                            <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-400/30">
                              <AlertCircle className="w-3 h-3 mr-1" />
                              Not Set
                            </Badge>
                          )}
                        </div>
                        <p className="text-white/60 text-sm mb-3">
                          {browserNotificationPermission === 'granted'
                            ? 'You will receive browser notifications for new messages, calls, and updates.'
                            : browserNotificationPermission === 'denied'
                            ? 'Browser notifications are blocked. Please enable them in your browser settings.'
                            : 'Enable browser notifications to stay updated even when MoveSplash is not open.'}
                        </p>
                        {browserNotificationPermission !== 'granted' && (
                          <Button
                            onClick={handleRequestBrowserNotifications}
                            disabled={isRequestingPermission || browserNotificationPermission === 'denied'}
                            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0 text-sm disabled:opacity-50"
                          >
                            <Bell className="w-4 h-4 mr-2" />
                            {isRequestingPermission ? 'Requesting...' : 'Enable Browser Notifications'}
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                  <Separator className="bg-white/10" />
                </>
              )}

              <div className="space-y-4">
                <h3 className="text-white">Notification Channels</h3>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-white/70">Push Notifications</Label>
                    <p className="text-white/50 text-sm">Receive notifications on your device</p>
                  </div>
                  <Switch
                    data-testid="toggle-push-notifications"
                    checked={settings.pushNotifications}
                    onCheckedChange={handlePushNotificationsToggle}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-white/70">Email Notifications</Label>
                    <p className="text-white/50 text-sm">Receive updates via email</p>
                  </div>
                  <Switch
                    checked={settings.emailNotifications}
                    onCheckedChange={(value) => void handleSettingChange('emailNotifications', value)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-white/70">SMS Notifications</Label>
                    <p className="text-white/50 text-sm">Receive text message alerts</p>
                  </div>
                  <Switch
                    checked={settings.smsNotifications}
                    onCheckedChange={(value) => void handleSettingChange('smsNotifications', value)}
                  />
                </div>
              </div>

              <Separator className="bg-white/10" />

              <div className="space-y-4">
                <h3 className="text-white">Activity Alerts</h3>

                {([
                  ['notifyLikes', 'Likes', 'Alerts when someone likes your posts'],
                  ['notifyComments', 'Comments', 'Stay updated on new comments'],
                  ['notifyMessages', 'Messages', 'Never miss a direct message'],
                  ['notifyFriendRequests', 'Friend Requests', 'Know when someone wants to connect'],
                  ['notifyStories', 'Stories', 'Updates when friends post new stories']
                ] as const).map(([key, title, description]) => (
                  <div key={key} className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label className="text-white/70">{title}</Label>
                      <p className="text-white/50 text-sm">{description}</p>
                    </div>
                    <Switch
                      checked={settings[key]}
                      onCheckedChange={(value) => void handleSettingChange(key, value)}
                    />
                  </div>
                ))}
              </div>

              <Separator className="bg-white/10" />

              <div className="space-y-4">
                <h3 className="text-white">Sound & Alerts</h3>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-white/70">Notification Sounds</Label>
                    <p className="text-white/50 text-sm">Play sounds for new notifications</p>
                  </div>
                  <Switch
                    checked={settings.soundEnabled}
                    onCheckedChange={(value) => void handleSettingChange('soundEnabled', value)}
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-white/70">
                      <Volume2 className="w-4 h-4" />
                      <span>Volume</span>
                    </div>
                    <Badge className="bg-white/10 text-white border-white/20">
                      {settings.soundVolume}%
                    </Badge>
                  </div>
                  <Slider value={[settings.soundVolume]} onValueChange={handleSoundVolumeChange} />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="appearance" className="p-6 space-y-6">
              <div className="space-y-4">
                <h3 className="text-white">Theme</h3>

                <div className="space-y-2">
                  <Label className="text-white/70">Color Theme</Label>
                  <Select value={themePreference} onValueChange={handleThemeSelect}>
                    <SelectTrigger className="bg-white/5 border-white/20 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gradient-to-br from-purple-900 to-pink-900 border-white/20">
                      {THEME_OPTIONS.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-white/70">Font Size</Label>
                  <Select
                    value={settings.fontSize}
                    onValueChange={(value) => void handleSettingChange('fontSize', value)}
                  >
                    <SelectTrigger className="bg-white/5 border-white/20 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gradient-to-br from-purple-900 to-pink-900 border-white/20">
                      <SelectItem value="small">Small</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="large">Large</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-white/70">Language</Label>
                  <Select value="en" disabled>
                    <SelectTrigger className="bg-white/5 border-white/20 text-white" disabled>
                      <SelectValue placeholder="English" />
                    </SelectTrigger>
                    <SelectContent className="bg-gradient-to-br from-purple-900 to-pink-900 border-white/20">
                      <SelectItem value="en">English</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-white/50 text-xs">English is the only available language right now.</p>
                </div>
              </div>

              <Separator className="bg-white/10" />

              <div className="space-y-4">
                <h3 className="text-white">Accessibility</h3>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-white/70">Auto-play videos</Label>
                    <p className="text-white/50 text-sm">Videos play automatically in feed</p>
                  </div>
                  <Switch
                    data-testid="toggle-auto-play"
                    checked={settings.autoPlayVideos}
                    onCheckedChange={(value) => void handleSettingChange('autoPlayVideos', value)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-white/70">Reduce animations</Label>
                    <p className="text-white/50 text-sm">Minimize motion effects</p>
                  </div>
                  <Switch
                    data-testid="toggle-reduce-animations"
                    checked={settings.reduceAnimations}
                    onCheckedChange={(value) => void handleSettingChange('reduceAnimations', value)}
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="about" className="p-6 space-y-6">
              <div className="space-y-4">
                <h3 className="text-white">MoveSplash</h3>
                <p className="text-white/70">Version 1.0.0</p>
                <p className="text-white/50 text-sm">
                  A Gen Z-focused social media platform with glassmorphism design, real-time messaging,
                  video chat, and disappearing stories.
                </p>
              </div>

              <Separator className="bg-white/10" />

              <div className="space-y-4">
                <Button
                  variant="ghost"
                  onClick={onOpenHelpCenter}
                  className="w-full justify-start text-white/70 hover:text-white hover:bg-white/10 disabled:opacity-40"
                  disabled={!onOpenHelpCenter}
                >
                  <HelpCircle className="w-4 h-4 mr-2" />
                  Help Center
                </Button>

                <Button
                  variant="ghost"
                  onClick={onOpenPrivacyPolicy}
                  className="w-full justify-start text-white/70 hover:text-white hover:bg-white/10 disabled:opacity-40"
                  disabled={!onOpenPrivacyPolicy}
                >
                  <Shield className="w-4 h-4 mr-2" />
                  Privacy Policy
                </Button>

                <Button
                  variant="ghost"
                  onClick={onOpenTermsOfService}
                  className="w-full justify-start text-white/70 hover:text-white hover:bg-white/10 disabled:opacity-40"
                  disabled={!onOpenTermsOfService}
                >
                  <Info className="w-4 h-4 mr-2" />
                  Terms of Service
                </Button>
              </div>

              <Separator className="bg-white/10" />

              <div className="space-y-4">
                <h3 className="text-white text-red-400">Danger Zone</h3>

                {onLogout && (
                  <Button
                    variant="ghost"
                    onClick={onLogout}
                    className="w-full justify-start text-white/70 hover:text-white hover:bg-white/10"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Log Out
                  </Button>
                )}

                <Button
                  variant="ghost"
                  onClick={handleDeleteAccount}
                  className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-500/10"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete Account
                </Button>
              </div>
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </Card>
    </div>
  );
}
