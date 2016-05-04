
class Api::BooksController < ApplicationController
  before_action :set_book, only: [:show, :edit, :update, :destroy]

  # GET /books
  # GET /books.json
  def index
    #display all books that a user owns
    userId = Integer(params[:userId])

    if userId == 0 && !current_user
      render json: {}
      return
    elsif userId == 0
      userId = current_user.id
    end
    # If displaying books of !current_user then display only the books that are not in @borrowings
    # @borrowings = Borrowing.where(owner_id: current_user, request_status: 'pending').joins(:book).joins(:borrower)
    # if userId == 0
    # @books = Book.find_user_books(current_user.id)
    # else
    # @books = Book.where(owner_id: userId).joins(:borrowing)

    @books = Book.find_user_books(userId)
    render json: @books
    # @books = Book.all
  end

  # GET /books/1
  # GET /books/1.json
  def show
    if @book
      render :show
    else
      render "api/shared/error", status: 500
    end
  end

  # POST /books
  # POST /books.json
  def create
    @book = Book.new(book_params)
      if @book.save
        render :show, status: 200
      else
        @errors = @book.errors.full_messages
        render "api/shared/error", status: 422
      end
  end

  # PATCH/PUT /books/1
  # PATCH/PUT /books/1.json
  def update
      if @book.update(book_params)
        render :show, status: 200
        # format.json { render :show, status: :ok, location: @book }
      else
        @errors = @book.errors.full_messages
        render "api/shared/error", status: 422
        # format.json { render json: @book.errors, status: :unprocessable_entity }
      end
  end

  # DELETE /books/1
  # DELETE /books/1.json
  def destroy
    @book.destroy
    render :show, status: 200
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_book
      @book = Book.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def book_params
      params.require(:book).permit(:title, :author, :image_url, :description, :owner_id,:id)
    end
end
