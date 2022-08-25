import {Http} from "../../../api/http";

const API_ENDPOINT = {
  SHOWBOOK: "/book/showBook",
  DETAILBOOK: "/book/detailBook",
  CREATEBOOK: "/book/createBook",
  UPDATEBOOK: "/book/updateBook",
  DELETEBOOK: "/book/deleteBook",
  LIKEBOOK: "/book/likeBook",
  DISLIKEBOOK: "/book/disLikeBook",
  CMTBOOK: "/book/cmtBook",
}

class BookServices{
  showBook(){
    return Http.get(API_ENDPOINT.SHOWBOOK)
  }

  detailBook(id){
    return Http.get(API_ENDPOINT.DETAILBOOK + `/${id}`)
  }

  createBook(data){
    return Http.postBook(API_ENDPOINT.CREATEBOOK, data)
  }

  updateBook(id, data){
    return Http.post(API_ENDPOINT.UPDATEBOOK + `?id=${id}`, data)
  }

  deleteBook(id){
    return Http.delete(API_ENDPOINT.DELETEBOOK + `?id=${id}`)
  }

  likeBook(id){
    return Http.putReactBook(API_ENDPOINT.LIKEBOOK, {id})
  }

  disLikeBook(id){
    return Http.putReactBook(API_ENDPOINT.DISLIKEBOOK, {id})
  }

  shareBook(){

  }

  cmtBook(data){
    return Http.putReactBook(API_ENDPOINT.CMTBOOK, data)
  }
}

const BookService = new BookServices();
export default BookService;
