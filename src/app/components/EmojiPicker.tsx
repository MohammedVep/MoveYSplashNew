/* Mohammed Vepari
   ID: 5145543
   Sunday November 30th 2025
  */
import { ScrollArea } from './ui/scroll-area';

interface EmojiPickerProps {
  onSelect: (emoji: string) => void;
}

const emojiCategories = {
  'Smileys & Emotion': ['😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊', '😇', '🥰', '😍', '🤩', '😘', '😗', '😚', '😙', '🥲', '😋', '😛', '😜', '🤪', '😝', '🤑', '🤗', '🤭', '🤫', '🤔'],
  'Gestures & Hands': ['👍', '👎', '👌', '✌️', '🤞', '🤟', '🤘', '🤙', '👈', '👉', '👆', '👇', '☝️', '👏', '🙌', '👐', '🤲', '🤝', '🙏', '✊', '👊', '🤛', '🤜', '👋', '🤚', '✋', '🖐️', '🖖', '🫱', '🫲'],
  'Hearts & Love': ['❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💔', '❣️', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥️', '❤️‍🔥', '❤️‍🩹', '💋', '💌', '💐', '🌹', '🥀'],
  'Celebration & Party': ['🎉', '🎊', '🎈', '🎁', '🎀', '🎂', '🍰', '🧁', '🥳', '🎆', '🎇', '✨', '🎃', '🎄', '🎋', '🎍', '🎎', '🎏', '🎐', '🎑', '🧨', '🎗️', '🎟️', '🎫', '🏆', '🏅', '🥇', '🥈', '🥉'],
  'Activities & Sports': ['⚽', '🏀', '🏈', '⚾', '🥎', '🎾', '🏐', '🏉', '🥏', '🎱', '🏓', '🏸', '🏒', '🏑', '🥍', '🏏', '🎮', '🕹️', '🎲', '🎯', '🎳', '🎣', '🎿', '🛷', '⛸️', '🥌', '🎭', '🎪'],
  'Food & Drink': ['🍕', '🍔', '🍟', '🌭', '🍿', '🥓', '🥚', '🍳', '🥞', '🧇', '🧀', '🍖', '🍗', '🥩', '🍤', '🍣', '🍱', '🥟', '🍙', '🍚', '🍛', '🍜', '🍝', '🍠', '🍢', '🍥', '🥮', '🍡', '🥠', '🥡'],
  'Nature & Animals': ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🐔', '🐧', '🐦', '🐤', '🦆', '🦅', '🦉', '🦇', '🐺', '🐗', '🐴', '🦄', '🐝', '🐛', '🦋'],
  'Travel & Places': ['🚗', '🚕', '🚙', '🚌', '🚎', '🏎️', '🚓', '🚑', '🚒', '🚐', '🚚', '🚛', '🚜', '🏍️', '🛵', '🚲', '🛴', '🚁', '✈️', '🚀', '🛸', '🚂', '🚆', '🚇', '🚊', '🚝', '🚄', '🚅', '🛶', '⛵'],
  'Objects & Symbols': ['⌚', '📱', '💻', '⌨️', '🖥️', '🖨️', '🖱️', '🕹️', '💾', '💿', '📷', '📹', '🎥', '📞', '☎️', '📻', '🎙️', '🎚️', '🎛️', '⏰', '⏱️', '⏲️', '⌛', '⏳', '📡', '🔋', '🔌', '💡', '🔦', '🕯️']
};

export function EmojiPicker({ onSelect }: EmojiPickerProps) {
  return (
    <div className="w-80 backdrop-blur-xl bg-gradient-to-br from-purple-900/90 to-pink-900/90 border border-white/20 rounded-2xl p-0">
      <ScrollArea className="h-96">
        <div className="p-4 space-y-4">
          {Object.entries(emojiCategories).map(([category, emojis]) => (
            <div key={category}>
              <div className="text-white/70 text-sm mb-2 px-1">{category}</div>
              <div className="grid grid-cols-8 gap-1">
                {emojis.map((emoji, index) => (
                  <button
                    key={index}
                    onClick={() => onSelect(emoji)}
                    className="text-2xl hover:scale-125 transition-transform p-2 hover:bg-white/10 rounded-lg"
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
