from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import flash
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')


class User:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.username = data['username']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

# Create User:
    @classmethod
    def create(cls, data):
        query = """
            INSERT INTO users (first_name, last_name, username, email, password)
            VALUES (%(first_name)s, %(last_name)s, %(username)s, %(email)s, %(password)s);
        """
        return connectToMySQL(DATABASE).query_db(query, data)

# Get User by Username
    @classmethod
    def get_by_username(cls, data):
        query = """
            SELECT * FROM users
            WHERE username = %(username)s;
        """
        results = connectToMySQL(DATABASE).query_db(query, data)
        if len(results) < 1:
            return False
        return cls(results[0])

# Get User by ID
    @classmethod
    def get_by_id(cls, data):
        query = """
            SELECT * FROM users
            WHERE id = %(id)s;
        """
        results = connectToMySQL(DATABASE).query_db(query, data)
        if len(results) < 1:
            return False
        return cls(results[0])

# Get User by Email
    @classmethod
    def get_by_email(cls,data):
        query = """
            SELECT * FROM users
            WHERE email = %(email)s;
        """
        results = connectToMySQL(DATABASE).query_db(query,data)
        if len(results) < 1:
            return False
        return cls(results[0])

# Validator


    @staticmethod
    def validator(data):
        is_valid = True
        if len(data['first_name']) < 1:
            flash("First Name Required", 'reg')
            is_valid = False
        if len(data['last_name']) < 1:
            flash("Last Name Required", 'reg')
            is_valid = False
        if len(data['username']) < 3:
            flash("Username must be more than 3 characters", 'reg')
            is_valid = False
        if len(data['email']) < 1:
            flash("Email Required", 'reg')
            is_valid = False
        # Checks email whether email has regex keys
        elif not EMAIL_REGEX.match(data['email']):
            flash("Email not valid.", 'reg')
            is_valid = False
        # Checks whether email is already in the database
        else:
            email_data = {
                'email': data['email']
            }
            potential_user = User.get_by_email(email_data)
            if potential_user:
                flash("Email is taken, Please type another email.", 'reg')
                is_valid = False
        if len(data['password']) < 1:
            flash("Password Required", 'reg')
            is_valid = False

        # Validating if confirm password does not match password
        elif not data['password'] == data['confirm_password']:
            flash("Password does not match", 'reg')
            is_valid = False
        return is_valid
