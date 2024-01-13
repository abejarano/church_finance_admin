export const showMessage = (
  toast: any,
  data: any,
  severity: string = "success",
  summary: string = "",
) => {
  if (data?.response?.data.message) {
    toast.add({
      severity: "error",
      summary: "",
      detail: data.response.data.message,
      life: 4000,
    });
    return;
  }

  if (data?.response?.data) {
    for (const errorKey in data.response.data) {
      toast.add({
        severity: "warn",
        detail: data.response.data[errorKey].message,
        life: 4000,
      });
    }
  }

  toast.add({
    severity,
    detail: data,
    summary: summary,
    life: 4000,
  });
};
