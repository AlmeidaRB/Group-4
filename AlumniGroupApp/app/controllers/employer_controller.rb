class EmployerController < ApplicationController
  def index
    @employers = Employer.all
    respond_to do |format|
      format.json { render json: @employers.to_json }
    end
  end

  def show
    set_employer
    respond_to do |format|
      format.json { render json: @employer.to_json }
    end
  end

  def create
    @employer = Employer.create employer_params
    respond_to do |format|
      format.json{ render nothing: true }
    end
  end

  def update
    set_employer
    @employer.update_attributes employer_params
    respond_to do |format|
      format.json{ render nothing: true }
    end
  end

  def destroy
    set_employer
    @employer.destroy
    respond_to do |format|
      format.json{ render nothing: true }
    end
  end

  private
  def set_employer
    @employer = Employer.find params[:id]
  end

  def employer_params
    params.require(:employer).permit(
      :name,
      :photo,
      :bio,
      :industry,
      :size,
      :date_founded,
      :email,
      )
  end
end
