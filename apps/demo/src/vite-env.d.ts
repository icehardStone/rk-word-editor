/// <reference types="vite/client" />

declare module '*.css';
declare module '*.css?inline' {
    const content: string;
    export default content;
}
declare module '@icehardStone/rk-editor-ui/styles.css';
declare module '@icehardStone/rk-editor-ui/styles';
