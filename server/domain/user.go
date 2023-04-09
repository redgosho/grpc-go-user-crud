package domain

type User struct {
	ID    int64
	Name  string
	Email string
}

type UserRepository interface {
	Create(user *User) (int64, error)
	Get(id int64) (*User, error)
	GetAll() ([]*User, error)
	Update(user *User) error
	Delete(id int64) error
}
