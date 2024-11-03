import sqlite3

def create_database():
    conn = sqlite3.connect('my_database.db')
    cursor = conn.cursor()
    
    # Create a table
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        email TEXT NOT NULL
    )
    ''')
    conn.commit()
    conn.close()

if __name__ == '__main__':
    create_database()
