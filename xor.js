function encrypt() {
  var input = document.getElementById("input").value;
  var key = document.getElementById("key").value;
  var output = "";
  var explanation = "Keterangan:\n\n";
  var j = 0;
  for (var i = 0; i < input.length; i++) {
    var ascii = input.charCodeAt(i);
    var ascii_key = key.charCodeAt(j);
    var decrypted_char = String.fromCharCode(ascii ^ ascii_key);
    output += decrypted_char;
    explanation +=
      "ASCII dari karakter '" + output[i] + "' adalah " + ascii + "\n";
    explanation +=
      "ASCII dari karakter kunci '" + key[j] + "' adalah " + ascii_key + "\n";
    explanation +=
      "Proses Dekripsi: '" +
      input[i] +
      "' XOR '" +
      key[j] +
      "' = " +
      decrypted_char.charCodeAt(0) +
      "\n\n";
    j = (j + 1) % key.length;
  }
  document.getElementById("output").value = output;
  document.getElementById("explanation").innerText = explanation;
}

function decrypt() {
  var input = document.getElementById("input").value;
  var key = document.getElementById("key").value;
  var output = "";
  var explanation = "Keterangan:\n\n";
  var j = 0;
  for (var i = 0; i < input.length; i++) {
    var ascii = input.charCodeAt(i);
    var ascii_key = key.charCodeAt(j);
    var encrypted_char = String.fromCharCode(ascii ^ ascii_key);
    output += encrypted_char;
    explanation +=
      "ASCII dari karakter '" + output[i] + "' adalah " + ascii + "\n";
    explanation +=
      "ASCII dari karakter kunci '" + key[j] + "' adalah " + ascii_key + "\n";
    explanation +=
      "Proses Enkripsi: '" +
      input[i] +
      "' XOR '" +
      key[j] +
      "' = " +
      encrypted_char.charCodeAt(0) +
      "\n\n";
    j = (j + 1) % key.length;
  }
  document.getElementById("output").value = output;
  document.getElementById("explanation").innerText = explanation;
}
