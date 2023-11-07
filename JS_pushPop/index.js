console.clear();

function MyArray(..args) {
    this.elements = {
        length = 0
    }

    this.push = function(..args) {
        
    }
    this.pop = funstion(){
        const length = this.elements.length;

        if (length === 0) return;

        const lastItem = this.elements[length - 1];

        delete this.elements[length - 1];
    }
}