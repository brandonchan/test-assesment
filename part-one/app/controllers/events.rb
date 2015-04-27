get '/events' do
  @user = Event.where(user_id: session[:user_id])

erb :"events/show"
end

get '/events/new' do

erb :"events/new"
end

post '/events' do
  p "*"*80
  p params
  p "*"*80

  @event = Event.new(user_id: session[:user_id],
    name: params[:name],
    location: params[:location],
    starts_at: params[:starts_at],
    ends_at: params[:ends_at],
    )

  if @event.save
    @event.to_json
  else
    erb :"events/new"
  end

end

get '/events/:id' do
  @event = Event.find(params[:id])

  erb :"/events/solo"
end

get '/events/:id/edit' do
  @event = Event.find(params[:id])
  erb :"events/edit"
end


put '/events/:id' do
  @event = Event.find(params[:id])
  event = Event.update_attributes(name: params[:name],
    location: params[:location],
    starts_at: params[:starts_at],
    ends_at: params[:ends_at])
  redirect '/events'
end

delete '/events/:id' do
  @event = Event.find(params[:id])
  @event.destroy
  redirect '/events'

end
