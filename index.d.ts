
declare namespace pixcnt {
	type SearchMode = 's_tag' | 's_tag_full';
	type Mode = 'none' | 'safe' | 'r18';

	export function countByTag(tag: string, mode: Mode, sessionId?: string): Promise<number>;
	export function countByKeyword(keyword: string, mode: Mode, sessionId?: string): Promise<number>;
}

export = pixcnt;
