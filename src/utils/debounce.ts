export function debounce<T extends (...args: any[]) => void >(
    func: T,
    delay: number
){
    let timer: ReturnType<typeof setTimeout>// means the "type" of timer is the type of whatever setTimeout returns

    return (...args: Parameters<T>) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            func(...args)
        }, delay)
    }
}