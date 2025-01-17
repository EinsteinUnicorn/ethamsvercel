declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}

declare module "*.module.css";


declare module '*.jpg';

declare namespace JSX {
    interface IntrinsicElements {
        'sw-auth': any
    }
   
}

declare interface Confetti {
    props: undefined
}