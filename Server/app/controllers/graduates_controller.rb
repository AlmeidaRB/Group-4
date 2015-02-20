class GraduatesController < ApplicationController
  def index
    @jsonarray = []
    @graduates = Graduate.all
    @graduates.each do |g|
      grad = g.as_json(include: 
        [:links.as_json, :experiences.as_json, :skills.as_json, :educations.as_json => {:include => [:degrees]}])
      @jsonarray.push(grad)
    end
    respond_to do |format|
      format.json { render json: @jsonarray }
    end
  end

  def search_graduates
    @jsonarray = []
      params[:state_search] = '' if params[:state_search] == "all"
      params[:city_search] = '' if params[:city_search] == "all"
      params[:position_search] = '' if params[:position_search] == "all"
      @graduates = Graduate.where("current_city LIKE ? AND current_state LIKE ? OR desired_position LIKE ?", "%#{params[:city_search]}%", "%#{params[:state_search]}%", "%#{params[:position_search]}")
    @graduates.each do |g|
      grad = g.as_json(include: 
        [:links.as_json, :experiences.as_json, :skills.as_json, :educations.as_json => {:include => [:degrees]}])
      @jsonarray.push(grad)
    end
    respond_to do |format|
      format.json { render json: @jsonarray }
    end
  end

  def show
    set_graduate
    respond_to do |format|
      format.json { render json: @graduate.as_json(include: 
        [:links.as_json, :experiences.as_json, :skills.as_json, :educations.as_json => {:include => [:degrees]}]) }
    end
  end

  def create
    @graduate = Graduate.create graduate_params
    respond_to do |format|
      format.json { render nothing: true }
    end
  end

  def update
    set_graduate
    @graduate.update_attributes graduate_params
    respond_to do |format|
      format.json { render nothing: true }
    end
  end

  def destroy
    set_graduate
    @graduate.destroy
    respond_to do |format|
      format.json { render nothing: true }
    end
  end

  private
  def set_graduate
    @graduate = Graduate.find params[:id]
  end

  def graduate_params
    params.require(:graduate).permit(
      :first_name,
      :last_name,
      :photo,
      :bio,
      :current_city,
      :current_state,
      :grad_city,
      :grad_state,
      :email,
      :grad_date
      )
  end
end
