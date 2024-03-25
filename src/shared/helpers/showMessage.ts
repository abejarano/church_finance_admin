export const showMessage = (
  toast: any,
  data: any,
  severity: string = "success",
  summary: string = "",
) => {
  if (data?.response?.data.message) {
    console.log(data.response.data.message);
    toast.add({
      severity: "error",
      summary: summary,
      detail: data.response.data.message,
      life: 8000,
    });
    return;
  }

  if (data?.response?.data) {
    for (const errorKey in data.response.data) {
      toast.add({
        severity: "warn",
        detail: data.response.data[errorKey].message,
        life: 8000,
      });
    }
    return;
  }

  toast.add({
    severity,
    detail: data,
    summary: summary,
    life: 8000,
  });
};
