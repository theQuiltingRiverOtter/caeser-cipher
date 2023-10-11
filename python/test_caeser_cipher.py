from caesar_cipher import caesar_cipher
import pytest


@pytest.mark.parametrize(
    "string, shift, expected",
    [
        ("Boy! What a string!", -5, "Wjt! Rcvo v nomdib!"),
        ("Hello zach168! Yes here.", 5, "Mjqqt efhm168! Djx mjwj."),
        ("Hello Zach168! Yes here.", -5, "Czggj Uvxc168! Tzn czmz."),
    ],
)
def test_caeser_cipher(string, shift, expected):
    assert caesar_cipher(string, shift) == expected
