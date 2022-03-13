# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN
# Matz is nice so we are nice ^

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def num_checker num
    if num % 2 == 0
        p "#{num} is even"
    else
        p "#{num} is odd"
    end
end

num_checker(num1)
num_checker(num2)
num_checker(num3)

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def no_vowels string
   p "#{string}".delete "A" "E" "I" "O" "U" "a" "e" "i" "o" "u"
end

no_vowels(album1)
no_vowels(album2)
no_vowels(album3)

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forwards or backwards. Use the test variables provided.

is_palindrome1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
is_palindrome2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
is_palindrome3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def palChecker word
    if word.downcase.reverse == word.downcase
        p "#{word} is a palindrome"
    else
        p "#{word} is not a palindrome"
    end
end

palChecker(is_palindrome1)
palChecker(is_palindrome2)
palChecker(is_palindrome3)
