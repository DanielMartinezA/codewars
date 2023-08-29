import sys


def next_bigger(num):
    # num_array = [int(x) for x in str(num)]
    num_array = list(str(num))
    if len(num_array) == 1:
        return -1

    suffix_length = 2
    suffix = num_array[-suffix_length:]
    # since we start at 2, checking if suffix is in descending order is just suffix[0] >= suffix[1]
    while suffix_length <= len(num_array) and suffix[0] >= suffix[1]:
        suffix_length += 1
        suffix = num_array[-suffix_length:]

    # if the whole number is in descending order, return -1
    if (suffix_length > len(num_array)):
        return -1

    # after finding the first suffix that's not in descending order
    # swap the suffix's first value with its next bigger one in suffix
    next_bigger_digit = '9'
    next_bigger_digit_index = 1
    for index in range(1, len(suffix)):
        if suffix[index] > suffix[0] and suffix[index] < next_bigger_digit:
            next_bigger_digit = suffix[index]
            next_bigger_digit_index = index
    # swap
    suffix[next_bigger_digit_index] = suffix[0]
    suffix[0] = next_bigger_digit

    # create the new number prefix + suffix[0] + sorted(suffix[1:])
    prefix = "".join(num_array[:-suffix_length])
    middle = str(suffix[0])
    suffix = "".join(sorted(suffix[1:]))

    return int(prefix + middle + suffix)


def main():
    if len(sys.argv) < 1:
        print("Error: missing argument (number)")
        sys.exit(1)
    num = sys.argv[1]

    print(next_bigger(int(num)))


if __name__ == "__main__":
    main()
