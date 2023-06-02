import React, { Component } from 'react'

export class Main extends Component {
  constructor() {
    super()
    this.state = {
      books: [
        { name: 'Book', price: 100, count: 1 },
        { name: 'Book2', price: 200, count: 8 },
        { name: 'Book3', price: 400, count: 2 },
        { name: 'Book4', price: 50, count: 4 },
        { name: 'Book5', price: 310, count: 5 }
      ],
      friend: {
        name: "colin"
      },
      message: "Hello colin!"
    }
  }
  addBooks() {
    // const newBook = { name: 'Book1', price: 111, count: 999 }
    // const books = [...this.state.books]
    // books.push(newBook)
    // this.setState({ books: books })
  }
  add(index) {
    const books = [...this.state.books]
    books[index].count++
    this.setState({
      books: books
    })
  }
  render() {
    const { books } = this.state
    return (
      <div>
        <ul>
          {books.map((v, index) => {
            return <li key={index}>书籍名称{v.name} -- 价格:{v.price} -- 数量:{v.count} ~~~~~<button onClick={() => this.add(index)}>+1</button></li>
          })}
        </ul>
        <button onClick={(index) => this.addBooks()}>添加一本书</button>
      </div>
    )
  }
}

export default Main