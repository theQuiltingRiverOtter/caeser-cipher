def caesar_cipher(string, shift_amount):
    lowercase = "abcdefghijklmnopqrstuvwxyz"
    uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    new_string = ""
    for ltr in string:
        if ltr in lowercase:
            index = lowercase.index(ltr)
            new_index = (index + shift_amount) % 26
            new_string += lowercase[new_index]
        elif ltr in uppercase:
            index = uppercase.index(ltr)
            new_index = (index + shift_amount) % 26
            new_string += uppercase[new_index]
        else:
            new_string += ltr

    return new_string
