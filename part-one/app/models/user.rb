class User < ActiveRecord::Base
  has_many :created_events, class_name: "Event"
  has_many :event_attendances
  has_many :attended_events, through: :event_attendances, source: :event

  def password
    @password ||= BCrypt::Password.new(hashed_password)
  end

  def password=(new_password)
    @password = BCrypt::Password.create(new_password)
    self.hashed_password = @password
  end

  def authenticate(entered_password)
    self.password == entered_password
  end
end
