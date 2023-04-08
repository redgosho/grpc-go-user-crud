package infrastructure

import (
	"database/sql"

	"github.com/redgosho/grpc-go-user-crud/domain"
)

type SQLiteUserRepository struct {
	DB *sql.DB
}

func NewSQLiteUserRepository(db *sql.DB) *SQLiteUserRepository {
	return &SQLiteUserRepository{DB: db}
}

func (r *SQLiteUserRepository) Create(user *domain.User) (int64, error) {
	query := `INSERT INTO users (name, email) VALUES (?, ?)`
	result, err := r.DB.Exec(query, user.Name, user.Email)
	if err != nil {
		return 0, err
	}
	return result.LastInsertId()
}

func (r *SQLiteUserRepository) Get(id int64) (*domain.User, error) {
	query := `SELECT id, name, email FROM users WHERE id = ?`
	row := r.DB.QueryRow(query, id)

	var user domain.User
	err := row.Scan(&user.ID, &user.Name, &user.Email)
	if err != nil {
		return nil, err
	}
	return &user, nil
}

func (r *SQLiteUserRepository) GetAll() ([]*domain.User, error) {
	query := `SELECT id, name, email FROM users`
	rows, err := r.DB.Query(query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var users []*domain.User
	for rows.Next() {
		var user domain.User
		err := rows.Scan(&user.ID, &user.Name, &user.Email)
		if err != nil {
			return nil, err
		}

		users = append(users, &user)
	}

	if err := rows.Err(); err != nil {
		return nil, err
	}

	return users, nil
}

func (r *SQLiteUserRepository) Update(user *domain.User) error {
	query := `UPDATE users SET name = ?, email = ? WHERE id = ?`
	_, err := r.DB.Exec(query, user.Name, user.Email, user.ID)
	return err
}

func (r *SQLiteUserRepository) Delete(id int64) error {
	query := `DELETE FROM users WHERE id = ?`
	_, err := r.DB.Exec(query, id)
	return err
}
