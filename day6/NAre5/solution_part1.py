import sympy
import numpy as np
from pathlib import Path


file_name = 'input.txt'
file_path = Path(__file__).with_name(file_name)

internal_timers = np.fromfile(file_path, sep=',')

timers_0 = sympy.Matrix([np.count_nonzero(internal_timers == i)
                         for i in range(9)])

forawrd_timers = sympy.Matrix([[0, 1, 0, 0, 0, 0, 0, 0, 0],
                              [0, 0, 1, 0, 0, 0, 0, 0, 0],
                              [0, 0, 0, 1, 0, 0, 0, 0, 0],
                              [0, 0, 0, 0, 1, 0, 0, 0, 0],
                              [0, 0, 0, 0, 0, 1, 0, 0, 0],
                              [0, 0, 0, 0, 0, 0, 1, 0, 0],
                              [1, 0, 0, 0, 0, 0, 0, 1, 0],
                              [0, 0, 0, 0, 0, 0, 0, 0, 1],
                              [1, 0, 0, 0, 0, 0, 0, 0, 0]])

sum_fish = sympy.ones(1, timers_0.shape[0])


def fish_from_all_fish_after_phase(creation_phase):
    # timers_(x) = (forawrd_timers^x)*timers_0
    timers_x = (forawrd_timers**creation_phase)*timers_0

    num_of_fish = sum_fish*timers_x
    return list(num_of_fish)[0]


if __name__ == "__main__":
    print(fish_from_all_fish_after_phase(creation_phase=80))
