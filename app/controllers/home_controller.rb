class HomeController < ApplicationController
  # before_filter :set_layout

  def index
  end

  def add_count
    @@count ||= 0
    if params[:num] and params[:num] != ""
      @@count = @@count + params[:num].to_i 
    else
      @@count = @@count + 1
    end
    render :text => @@count.to_s
  end

  def count
    @@count ||=0
    render :text => @@count.to_s
  end

  def status_update
    @@count ||=0
    div_five = @@count / 5
    div_eight = @@count / 8
    if div_eight * 8 == @@count
      render :text => "???"
    elsif div_five * 5 == @@count
      render :text => "YES!!"
    else
      render :text => "No =["
    end
  end

  def self.random
    rand(1000).to_s
  end

  def render_partial1
    render :partial => "image1"
  end

  def render_partial2
    render :partial => "image2"
  end

  def render_all1
    render :layout => "index"
    render_partial1
  end

  def render_all2
    render :layout => "index"
    render_partial2
  end

  def check_params
    render :text => params.to_s
  end

end
