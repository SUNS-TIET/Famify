import csv
import  random

    
    
    
def quizing_bot():
    print("lets start the quizing...")
    
    with open("C:\\Users\\HP\\Downloads\\quiz-bot-using-python-main\\quiz-bot-using-python-main\\sample_quiz_questions.csv", "r") as f:
        reader = csv.reader(f)
        quiz_qas = list(reader) 
    ans='yes'
    while(ans=='yes'):
        context,q,op1, op2,op3, op4,correct_option = random.choice(quiz_qas)
        data = [q,op1, op2, op3, op4, correct_option]    
        options=[op1,op2,op3,op4]
        question=data[0]
        print(question)
        print(op1 +"\n" + op2 + "\n" + op3 + "\n" + op4)
        answer = input("What is your answer? ")
        if answer == correct_option:
            print("Correct!")
            print(context)

        else:
            print("Incorrect.")
            print("Correct answer should be: "+options[int(correct_option)-1])
            print(context)
        ans=input("Do you want to play again: ")
        ans=ans.lower()
        print()

        
quizing_bot()

    

