package application

import "github.com/redgosho/grpc-go-user-crud/server/domain"

type UserService struct {
	repo domain.UserRepository
}

func NewUserService(repo domain.UserRepository) *UserService {
	return &UserService{repo: repo}
}

func (s *UserService) Create(user *domain.User) (int64, error) {
	return s.repo.Create(user)
}

func (s *UserService) Get(id int64) (*domain.User, error) {
	return s.repo.Get(id)
}

func (s *UserService) GetAll() ([]*domain.User, error) {
	return s.repo.GetAll()
}

func (s *UserService) Update(user *domain.User) error {
	return s.repo.Update(user)
}

func (s *UserService) Delete(id int64) error {
	return s.repo.Delete(id)
}
