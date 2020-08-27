class ProductsController < ApplicationController
  
  def index
    products = Product.all 
    render json: products  
  end
  
  def show 
    product = Product.find(params[:id])
    render json: product
  end

  def create 
    product = Product.new(product_params)

    if product.save 
      render json: product   
    else   
      render json: product.errors, status: unprocessable_entity # {error: 'Error creating'}
    end
  
  end
  
  # def update 
    
  # end

  def destroy
    
    product = Product.find_by(id: params[:id])
    
    product.delete
    render json: {productId: product.id}
  end
  
  private 

  def product_params 
    params.require(:product).permit(:name)
  end

end
