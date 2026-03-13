import { revalidatePath } from 'next/cache';
import type { CollectionAfterChangeHook, CollectionAfterDeleteHook, GlobalAfterChangeHook } from 'payload';

export function revalidateCollection(path: string): {
  afterChange: CollectionAfterChangeHook[];
  afterDelete: CollectionAfterDeleteHook[];
} {
  return {
    afterChange: [() => { revalidatePath(path); }],
    afterDelete: [() => { revalidatePath(path); }],
  };
}

export function revalidateGlobal(path: string): {
  afterChange: GlobalAfterChangeHook[];
} {
  return {
    afterChange: [() => { revalidatePath(path); }],
  };
}
