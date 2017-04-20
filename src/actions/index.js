import { TOGGLE_CATEGORY } from './types';

export default function toggleCategory(isOpen) {
  return { type: TOGGLE_CATEGORY, payload: isOpen };
}
