import type { FirestoreError, Unsubscribe } from 'firebase/firestore';
import type { AgeBand, KidActivityLog, KidAvatar, KidFeelingId, KidIntensity, KidProfile } from '@/domain/kids';

export interface NewKid {
  name: string;
  band: AgeBand;
  avatar: KidAvatar;
}

export interface NewKidActivity {
  kidId: string;
  activityId: string;
  feeling?: KidFeelingId | null;
  intensity?: KidIntensity | null;
  note?: string | null;
}

/** Operaciones comunes a Firestore y al modo demo. */
export interface KidsRepo {
  addKid: (uid: string, kid: NewKid) => Promise<string>;
  updateKid: (uid: string, kidId: string, patch: Partial<NewKid>) => Promise<void>;
  deleteKid: (uid: string, kidId: string) => Promise<void>;
  subscribeKids: (uid: string, onData: (rows: KidProfile[]) => void, onError: (e: FirestoreError) => void) => Unsubscribe;
  addKidActivity: (uid: string, a: NewKidActivity) => Promise<unknown>;
  subscribeKidActivities: (uid: string, onData: (rows: KidActivityLog[]) => void, onError: (e: FirestoreError) => void) => Unsubscribe;
}
