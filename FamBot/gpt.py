#!/usr/bin/python3
import sys
import shlex
import openai



openai.api_key = "USE YOUR OWN API KEY" # Replace with your API key

def chatbot(prompt):
    completions = openai.Completion.create(
        #engine="text-davinci-003",
	model="davinci:ft-personal-2023-02-05-10-28-21", # custom model for fampay
        prompt=prompt,
        max_tokens=1024,
        n=1,
        stop=None,
        temperature=0.5,
    )

    message = completions.choices[0].text
    return message

# prompt = input("Enter a prompt: ")
prompt = " ".join(map(shlex.quote, sys.argv[1:]))
response = chatbot(prompt)
#response = prompt
print(response)
