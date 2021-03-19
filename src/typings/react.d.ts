// tslint:disable-next-line: interface-name
interface RefObject<T> {
	readonly current: T | null;
}

declare module '*.scss' {
	const content: any;
	export default content;
}

declare const GLOBAL_VARIABLES: any;

declare module '*.svg' {
	const content: any;
	export default content;
}

declare module 'react-context-menu';
declare module 'react-simple-timefield';
