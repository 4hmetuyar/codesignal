bool variableName(string name) {
      for (int i = 0; i < name.length(); i++) {
            if (!('a' <= name.charAt(i) && name.charAt(i) <= 'z' ||
                    'A' <= name.charAt(i) && name.charAt(i) <= 'Z' ||
                    '0' <= name.charAt(i) && name.charAt(i) <= '9' ||
                    name.charAt(i) == '_')) {
                return false;
            }
        }

        if ('0' <= name.charAt(0) && name.charAt(0) <= '9') {
            return false;
        }

        return true;
}
