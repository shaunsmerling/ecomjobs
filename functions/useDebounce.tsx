function useDebounce(func: Function, timeout: number) {
    let timer: any;
    return (...args: any) => {
        const context = null;
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            func.apply(context, args);
        }, timeout);
    };
}
export default useDebounce;