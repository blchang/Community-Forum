class HomeController < ApplicationController
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
end
