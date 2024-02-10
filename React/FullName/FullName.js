const { createElement } = React;

function FullName( { name, surname} ) {
    return createElement (
        'div',
        null,
        name,
        ' ',
        surname,
    )
}

export default FullName;