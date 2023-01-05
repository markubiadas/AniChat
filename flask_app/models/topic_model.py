from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask_app.models import user_model
from flask import flash

class Topic:
    def __init__ (self,data):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user_id = data['user_id']


# GET ALL TOPIC
    @classmethod
    def get_all(cls):
        query = """
            SELECT * FROM topics
            JOIN users ON topics.user_id = users.id;
        """
        results = connectToMySQL(DATABASE).query_db(query)
        all_topics = []
        if results:
            for row in results:
                this_topic = cls(row)
                user_data = {
                    **row,
                    'id': row['users.id'],
                    'created_at': row['users.created_at'],
                    'updated_at': row['users.updated_at'],
                }
                this_user = user_model.User(user_data)
                this_topic.writer = this_user
                all_topics.append(this_topic)
        return all_topics


# GET ONE TOPIC
    # @classmethod
    # def get_one(cls,data):
    #     query = """
    #         SELECT * FROM topics
    #         JOIN 
    #     """


# CREATE NEW TOPIC
    @classmethod
    def create(cls, data):
        query = """
            INSERT INTO topics (id, name, user_id)
            VALUES (%(id)s, %(name)s), %(user_id)s;
        """
        return connectToMySQL(DATABASE).query_db(query,data)

