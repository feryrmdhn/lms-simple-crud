
export const reorder = (list: any, startIndex: number, endIndex: number) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
}

export const itemStyle = (_isDragging: boolean, draggableStyle: any | undefined) => ({
    ...draggableStyle,
    userSelect: 'none',
    width: '100%',
    overFlow: 'auto'
})