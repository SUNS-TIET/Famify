import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

# Initialize Firebase app with credentials
cred = credentials.Certificate('./serviceAccountKey.json')
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://famify-quizbot.firebaseio.com' # shhh don't tell anyone
})

# Get reference to Firebase database
ref = db.reference()

# Define the quiz questions and answers
questions = [{
    'question': 'What is the capital of France?',
    'options': ['Paris', 'London', 'Berlin', 'Madrid'],
    'answer': 'Paris'
}, {
    'question': 'What is the currency of Japan?',
    'options': ['Yen', 'Euro', 'Dollar', 'Pound'],
    'answer': 'Yen'
}]

# Function to ask the questions and check the answers
def run_quiz():
    score = 0
    for i, q in enumerate(questions):
        print(f'Question {i+1}: {q["question"]}')
        print(f'Options: {", ".join(q["options"])}')
        answer = input('Enter your answer: ')
        if answer == q['answer']:
            print('Correct!')
            score += 1
        else:
            print(f'Incorrect. The correct answer is {q["answer"]}.')
    print(f'You scored {score} out of {len(questions)}.')

# Run the quiz
run_quiz()

# Write the answers and options to Firebase database
for i, q in enumerate(questions):
    ref.child(f'question_{i+1}').set({
        'question': q['question'],
        'options': q['options'],
        'answer': q['answer']
    })