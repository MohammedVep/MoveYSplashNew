'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Mic, Square, Play, Pause, Trash2, Send, Circle } from 'lucide-react';
import { toast } from 'sonner';

interface VoiceRecorderProps {
  onSendVoice: (audioData: string, duration: number, mimeType?: string) => void;
}

export function VoiceRecorder({ onSendVoice }: VoiceRecorderProps) {
  const [open, setOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [selectedMimeType, setSelectedMimeType] = useState<string | undefined>(undefined);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
      }
    };
  }, [audioUrl]);

  const resolveSupportedMimeType = () => {
    const candidates = [
      'audio/webm;codecs=opus',
      'audio/webm',
      'audio/ogg;codecs=opus',
      'audio/mp4;codecs=aac',
      'audio/mpeg'
    ];

    if (typeof window === 'undefined' || typeof MediaRecorder === 'undefined') {
      return undefined;
    }

    for (const type of candidates) {
      if (MediaRecorder.isTypeSupported(type)) {
        return type;
      }
    }
    return undefined;
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mimeType = resolveSupportedMimeType();
      const recorder = mimeType
        ? new MediaRecorder(stream, { mimeType })
        : new MediaRecorder(stream);
      const effectiveType = recorder.mimeType || mimeType;
      setSelectedMimeType(effectiveType);

      mediaRecorderRef.current = recorder;
      audioChunksRef.current = [];

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      recorder.onstop = () => {
        const type = effectiveType || audioChunksRef.current[0]?.type || 'audio/webm';
        const blob = new Blob(audioChunksRef.current, { type });
        setAudioBlob(blob);
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);
        stream.getTracks().forEach(track => track.stop());
      };

      recorder.start();
      setIsRecording(true);
      setRecordingTime(0);

      timerRef.current = window.setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);

      toast.success('Recording started! 🎤');
    } catch (error) {
      console.error('Error accessing microphone:', error);
      toast.error('Could not access microphone');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      setIsPaused(false);
      
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      
      toast.success('Recording saved! 🎵');
    }
  };

  const pauseRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      if (isPaused) {
        mediaRecorderRef.current.resume();
        setIsPaused(false);
        timerRef.current = window.setInterval(() => {
          setRecordingTime((prev) => prev + 1);
        }, 1000);
      } else {
        mediaRecorderRef.current.pause();
        setIsPaused(true);
        if (timerRef.current) {
          clearInterval(timerRef.current);
        }
      }
    }
  };

  const playAudio = () => {
    if (audioUrl && audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const deleteRecording = () => {
    setAudioBlob(null);
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
    }
    setAudioUrl(null);
    setRecordingTime(0);
    setIsPlaying(false);
    setSelectedMimeType(undefined);
    toast.success('Recording deleted');
  };

  const sendVoiceMessage = async () => {
    if (audioBlob) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Audio = reader.result as string;
        onSendVoice(base64Audio, recordingTime, selectedMimeType || audioBlob.type);
        setOpen(false);
        deleteRecording();
        toast.success('Voice message sent! 🎤');
      };
      reader.readAsDataURL(audioBlob);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen && isRecording) {
      stopRecording();
    }
    setOpen(newOpen);
  };

  return (
    <>
      <Popover open={open} onOpenChange={handleOpenChange}>
        <PopoverTrigger asChild>
          <Button 
            size="sm"
            variant="ghost"
            className="text-white/70 hover:text-white hover:bg-white/10 h-9"
          >
            <Mic className="w-5 h-5 mr-1" />
            <span className="text-sm">Voice</span>
          </Button>
        </PopoverTrigger>
        
        <PopoverContent 
          className="w-80 p-0 backdrop-blur-xl bg-gradient-to-br from-purple-900/95 to-pink-900/95 border-white/20" 
          align="end"
          side="top"
        >
          <div className="p-4">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Mic className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white">Voice Message</h3>
                <p className="text-white/60 text-sm">Record a voice note</p>
              </div>
            </div>

            {/* Recording Interface */}
            <Card className="backdrop-blur-xl bg-white/10 border-white/20 p-6 mb-4">
              <div className="flex flex-col items-center justify-center gap-4">
                {/* Recording Animation */}
                {isRecording && (
                  <div className="relative">
                    <div className={`w-24 h-24 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center ${isPaused ? '' : 'animate-pulse'}`}>
                      <Circle className={`w-12 h-12 text-white ${isPaused ? '' : 'fill-current'}`} />
                    </div>
                    {!isPaused && (
                      <div className="absolute -inset-2 rounded-full border-4 border-pink-500/50 animate-ping"></div>
                    )}
                  </div>
                )}

                {/* Waveform placeholder when not recording */}
                {!isRecording && audioUrl && (
                  <div className="w-full h-24 flex items-center justify-center gap-1">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-1 bg-gradient-to-t from-pink-500 to-purple-500 rounded-full ${isPlaying ? 'animate-pulse' : ''}`}
                        style={{
                          height: `${Math.random() * 60 + 20}%`,
                          animationDelay: `${i * 50}ms`
                        }}
                      ></div>
                    ))}
                  </div>
                )}

                {/* Start button when no recording */}
                {!isRecording && !audioUrl && (
                  <Button
                    size="lg"
                    onClick={startRecording}
                    className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 p-0"
                  >
                    <Mic className="w-10 h-10" />
                  </Button>
                )}

                {/* Time Display */}
                <div className="text-white text-2xl font-mono">
                  {formatTime(recordingTime)}
                </div>

                {/* Recording Controls */}
                {isRecording && (
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      onClick={pauseRecording}
                      variant="ghost"
                      className="text-white hover:bg-white/10"
                    >
                      {isPaused ? (
                        <>
                          <Play className="w-4 h-4 mr-1" />
                          Resume
                        </>
                      ) : (
                        <>
                          <Pause className="w-4 h-4 mr-1" />
                          Pause
                        </>
                      )}
                    </Button>
                    <Button
                      size="sm"
                      onClick={stopRecording}
                      className="bg-red-500 hover:bg-red-600 text-white"
                    >
                      <Square className="w-4 h-4 mr-1" />
                      Stop
                    </Button>
                  </div>
                )}

                {/* Playback Controls */}
                {!isRecording && audioUrl && (
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      onClick={playAudio}
                      variant="ghost"
                      className="text-white hover:bg-white/10"
                    >
                      {isPlaying ? (
                        <>
                          <Pause className="w-4 h-4 mr-1" />
                          Pause
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 mr-1" />
                          Play
                        </>
                      )}
                    </Button>
                    <Button
                      size="sm"
                      onClick={deleteRecording}
                      variant="ghost"
                      className="text-red-400 hover:text-red-300 hover:bg-white/10"
                    >
                      <Trash2 className="w-4 h-4 mr-1" />
                      Delete
                    </Button>
                    <Button
                      size="sm"
                      onClick={sendVoiceMessage}
                      className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white"
                    >
                      <Send className="w-4 h-4 mr-1" />
                      Send
                    </Button>
                  </div>
                )}
              </div>
            </Card>

            {/* Tips */}
            <div className="bg-white/5 rounded-lg p-3 border border-white/10">
              <p className="text-white/60 text-xs">
                💡 Tip: Keep it short and sweet! Voice messages under 30 seconds work best.
              </p>
            </div>
          </div>
        </PopoverContent>
      </Popover>

      {/* Hidden audio element for playback */}
      {audioUrl && (
        <audio
          ref={audioRef}
          src={audioUrl}
          onEnded={() => setIsPlaying(false)}
          className="hidden"
        />
      )}
    </>
  );
}
