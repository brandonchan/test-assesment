get '/' do
  redirect '/login'
end

get '/login' do
  erb :login
end

post '/login' do
  @user = User.find_by(email: params[:user][:email])

  if @user && @user.authenticate(params[:user][:password])
    session[:user_id] = @user.id
    redirect "/users/#{@user.id}"
  else
    @user = User.new
    @user.errors.add(:login, "Username or Password did not match.")
    erb :login
  end
end

get '/logout' do
  session.delete(:user_id)

  redirect '/'
end


post '/users' do
  @user = User.create(params[:user])

  if @user.errors.empty?
    session[:user_id] = @user.id
    redirect '/'
  else
    erb :"users/new"
  end
end

get '/users/new' do
  erb :"users/new"
end

get '/users/:user_id' do
  @user = User.find(params[:user_id])
  redirect "/events"
end


