function hanldeSubmit() { }
function handleclose(e) {
    e.preventDefault()
}
function handleAdd() {
    let id = list.length
    let text = list.length
    let isChecked = list.length
    setList([...list, { id, text, isChecked }])
}
function handleChange(e, id) {
    const updetedList = list.map(item => {
        if (item.id === id) {
            return { ...item, isChecked: e.target.checked }
        }
        return item
    })
    setList(updetedList)
}
function handleDelete(id) {
    setList(list => list.filter(item => item.id !== id))
}
export { hanldeSubmit, handleclose, handleAdd, handleChange, handleDelete }