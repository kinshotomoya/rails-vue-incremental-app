class HomeController < ApplicationController
  def index
    @members = [{ name: "kinsho", age: 24 }, { name: 'tomoya', age: 22 }]
  end
end
