export default class ListManager<T extends { id: string }> {
    items: T[];
  
    constructor(initialItems: T[]) {
      this.items = initialItems;
    }
  
    addItem(newItem: T) {
      this.items = [...this.items, newItem];
    }
  
    updateItem(index: number, updatedFields: Partial<T>) {
      this.items = this.items.map((item, i) =>
        i === index ? { ...item, ...updatedFields } : item
      );
    }
    updateItemById(id: string, updatedFields: Partial<T>) {
      this.items = this.items.map((item, i) =>
        item.id === id ? { ...item, ...updatedFields } : item
      );
    }
  
    deleteItem(index: number) {
      this.items = this.items.filter((_, i) => i !== index);
    }
  
    getItems() {
      return this.items;
    }
  }