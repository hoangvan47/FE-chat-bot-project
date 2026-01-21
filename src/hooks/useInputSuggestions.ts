/**
 * Input Suggestions Hook
 * Autocomplete based on previous messages and common phrases
 */

import { useState, useEffect, useMemo } from 'react';

// Common chat suggestions
const COMMON_SUGGESTIONS = [
  'Hello!',
  'How are you?',
  'Can you help me with...',
  'Thank you!',
  'Goodbye!',
  'Tell me about...',
  'Explain...',
  'What is...',
  'How does... work?',
  'Can you show me...',
];

interface UseInputSuggestionsOptions {
  previousMessages?: string[];
  maxSuggestions?: number;
  minLength?: number;
}

/**
 * Hook for input autocomplete suggestions
 */
export const useInputSuggestions = (options: UseInputSuggestionsOptions = {}) => {
  const {
    previousMessages = [],
    maxSuggestions = 5,
    minLength = 2,
  } = options;

  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // Combine common suggestions with previous messages
  const allSuggestions = useMemo(() => {
    return [...COMMON_SUGGESTIONS, ...previousMessages];
  }, [previousMessages]);

  // Filter suggestions based on input
  useEffect(() => {
    if (inputValue.length < minLength) {
      setSuggestions([]);
      return;
    }

    const filtered = allSuggestions
      .filter((suggestion) =>
        suggestion.toLowerCase().includes(inputValue.toLowerCase())
      )
      .filter((suggestion) => suggestion.toLowerCase() !== inputValue.toLowerCase())
      .slice(0, maxSuggestions);

    setSuggestions(filtered);
  }, [inputValue, allSuggestions, maxSuggestions, minLength]);

  return {
    inputValue,
    setInputValue,
    suggestions,
    clearSuggestions: () => setSuggestions([]),
  };
};

/**
 * Smart suggestions based on context
 * Suggests next likely message based on conversation
 */
export const getSmartSuggestions = (lastMessage: string): string[] => {
  const greetings = ['hi', 'hello', 'hey'];
  const thanks = ['thank', 'thanks', 'appreciate'];
  const questions = ['?', 'what', 'how', 'why', 'when', 'where'];

  const lower = lastMessage.toLowerCase();

  // If AI asks a question, suggest answers
  if (lower.includes('?')) {
    return ['Yes', 'No', 'Maybe', 'Can you explain more?', 'I understand'];
  }

  // If user greets, suggest conversation starters
  if (greetings.some((g) => lower.includes(g))) {
    return [
      'Can you help me with something?',
      'I have a question',
      'Tell me about your features',
    ];
  }

  // If user thanks, suggest closings
  if (thanks.some((t) => lower.includes(t))) {
    return ['Goodbye!', 'See you later!', 'Thanks for your help!'];
  }

  // Default suggestions
  return [
    'Tell me more',
    'Can you explain?',
    'What else can you do?',
    'Thanks!',
  ];
};
