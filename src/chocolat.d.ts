declare module 'chocolat' {
    interface ChocolatOptions {
        loop?: boolean;
        // Add other options as needed
    }

    function Chocolat(elements: NodeListOf<Element>, options?: ChocolatOptions): void;

    export default Chocolat;
}