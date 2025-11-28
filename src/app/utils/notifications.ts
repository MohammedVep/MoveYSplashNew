 /**
  * Mohammed Vepari
  * ID: 5145543
  * Friday November 14th 2025
  */

/**
 * Cross-browser notification utility
 * Works with Safari, Chrome, Firefox, and other modern browsers
 */

export interface NotificationOptions {
  title: string;
  body: string;
  icon?: string;
  tag?: string;
  requireInteraction?: boolean;
  onClick?: () => void;
}

class NotificationManager {
  private permission: NotificationPermission = 'default';
  private supported: boolean = false;

  constructor() {
    const notificationAPI = this.getNotificationAPI();
    this.supported = Boolean(notificationAPI);
    if (notificationAPI) {
      this.permission = notificationAPI.permission;
    }
  }

  private getNotificationAPI(): typeof Notification | undefined {
    if (typeof window === 'undefined') {
      return undefined;
    }

    return window.Notification;
  }

  /**
   * Check if notifications are supported
   */
  isSupported(): boolean {
    return this.supported;
  }

  /**
   * Get current permission status
   */
  getPermission(): NotificationPermission {
    return this.permission;
  }

  /**
   * Request notification permission
   * MUST be called from a user interaction (click, tap, etc.) for Safari
   */
  async requestPermission(): Promise<NotificationPermission> {
    if (!this.supported) {
      console.warn('Notifications are not supported in this browser');
      return 'denied';
    }

    const notificationAPI = this.getNotificationAPI();
    if (!notificationAPI) {
      console.warn('Notification API is not available');
      return 'denied';
    }

    try {
      // Safari requires the callback syntax in older versions
      if (notificationAPI.permission === 'default') {
        const permission = await new Promise<NotificationPermission>((resolve) => {
          // Modern browsers (and newer Safari)
          if (notificationAPI.requestPermission.length === 0) {
            notificationAPI.requestPermission().then(resolve);
          } else {
            // Older Safari
            notificationAPI.requestPermission(resolve);
          }
        });
        this.permission = permission;
        return permission;
      }
      
      this.permission = notificationAPI.permission;
      return notificationAPI.permission;
    } catch (error) {
      console.error('Error requesting notification permission:', error);
      return 'denied';
    }
  }

  /**
   * Show a notification
   * Will automatically request permission if needed (must be called from user interaction)
   */
  async show(options: NotificationOptions): Promise<Notification | null> {
    if (!this.supported) {
      console.warn('Notifications are not supported');
      return null;
    }

    const notificationAPI = this.getNotificationAPI();
    if (!notificationAPI) {
      console.warn('Notification API is not available');
      return null;
    }

    // Request permission if not granted
    if (this.permission !== 'granted') {
      const permission = await this.requestPermission();
      if (permission !== 'granted') {
        console.warn('Notification permission denied');
        return null;
      }
    }

    try {
      const notification = new notificationAPI(options.title, {
        body: options.body,
        icon: options.icon || '/favicon.ico',
        tag: options.tag,
        requireInteraction: options.requireInteraction || false,
        // Safari-specific: ensure badge and silent are set
        badge: options.icon,
        silent: false
      });

      if (options.onClick) {
        notification.onclick = (event) => {
          event.preventDefault();
          options.onClick?.();
          notification.close();
        };
      }

      return notification;
    } catch (error) {
      console.error('Error showing notification:', error);
      return null;
    }
  }

  /**
   * Show a notification (simplified version)
   */
  async showSimple(title: string, body: string, onClick?: () => void): Promise<Notification | null> {
    return this.show({ title, body, onClick });
  }
}

// Export singleton instance
export const notificationManager = new NotificationManager();

// Export convenience functions
export const requestNotificationPermission = () => notificationManager.requestPermission();
export const showNotification = (options: NotificationOptions) => notificationManager.show(options);
export const isNotificationSupported = () => notificationManager.isSupported();
export const getNotificationPermission = () => notificationManager.getPermission();
