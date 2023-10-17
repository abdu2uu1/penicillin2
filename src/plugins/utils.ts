export const rules:object = {
  required: (value) => {
    if (value || value == 0) {
      return true;
    } else {
      return "الحقل مطلوب";
    }
  },
  emailRules: (v) => {
    if (!v) return "البريد الالكتروني مطلوب";
    else if (!/.+@.+\..+/.test(v)) return "البريد الالكتروني غير صحيح";
    else if (
      !/^[a-zA-Z0-9._-]+@gmail.com$|^[a-zA-Z0-9._-]+@yahoo.com$/.test(v)
    )
    return 'يرجى ادخال الايميل بالصيغة الصحيحة '
    else return true;
  },
  Number: (v) => {
    if (!v) return "رقم الهاتف مطلوب";
    else if (v.length < 11  || v.length > 11)
      return "يجب ان يكون رقم الهاتف  11 رقم ";
    else if (
      !/^(010|011|012|015|016|017|018|019|02|03|04|05|06|07|08|09)/.test(v)
    )
      return "يجب ان يبدا رقم الهاتف بصيغة صحيحة ";
    else if (!/^[0-9]+$/.test(v)
    )
    return 'يجب كتابة الرقم بصيغة صحيحة '
    else return true;
  },
  maxLen: (v) => {
    if (!(v.length < 12 || v.length > 12 ))
    return 'يجب ان يكون رقم البطاقة متكون من 12 رقم'
  }
};