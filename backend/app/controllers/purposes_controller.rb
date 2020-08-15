class PurposesController < ApplicationController
  before_action :set_product

  def index
    # if @product 
    #   purposes = @product.purposes 
    # else
    #   purposes = Purpose.all  
    # end
    purposes = @product.purposes
    render json: purposes
  end
  
  def show 
    purpose = @product.purposes.find_by(id: params[:id])
    #purpose = Purpose.find(params[:id])
    render json: purpose
  end

  def create 
    purpose = @product.purposes.build(purpose_params)

    if purpose.save 
      render json: @product   
    else   
      render json: purpose.errors, status: unprocessable_entity # {error: 'Error creating'}
    end
  
  end
  
  # def update 
    
  # end

  def destroy
    purpose = Purpose.find(params["id"])
    #product = Product.find(purpose.product_id)
    purpose.destroy
    
    render json: @product#{purposeId: purpose.id}
  end
  
  private 

  def set_product
    @product = Product.find(params[:product_id])
  end

  def purpose_params 
    params.require(:purpose).permit(:body, :product_id)
  end

end
