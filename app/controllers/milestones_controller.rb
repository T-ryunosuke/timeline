class MilestonesController < ApplicationController

  def index
    @milestones = Milestone.includes(:user)
  end

  def new
    @milestone = Milestone.new
  end

  def create
    @milestone = current_user.milestones.build(milestone_params)
    if @milestone.save
      redirect_to milestones_path, success: t("milestones.create.success")
    else
      flash.now[:info] = t("milestones.create.failure")
      render :new, status: :unprocessable_entity
    end
  end

  def show
    @milestone = Milestone.find(params[:id])
  end

  def edit
    @milestone = current_user.milestones.find(params[:id])
  end

  def update
    @milestone = current_user.milestones.find(params[:id])
    if @milestone.update
      redirect_to milestone_path(@milestone), success: t("milestones.update.success")
    else

      flash.now[:info] = t("milestones.update.failure")
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @milestone = current_user.milestones.find(params[:id])
    @milestone.destroy!
    redirect_to milestones_path, success: t("milestones.delete.success"), status: :see_other
  end

  private

  def milestone_params
    params.require(:milestone).permit(:title, :status, :childhood_content, :adulthood_content, :mature_age_content, :adolescence_image, :adolescence_image_cache, :adulthood_image, :adulthood_image_cache, :mature_age_image, :mature_age_image_cache, { childhood_images: [] }, :childhood_images_cache)
  end
end
