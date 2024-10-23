package com.uis.easymix.exception;

import java.util.Date;
import java.util.Map;

public class ExceptionResponse {
    private Date timestamp;
    private String mensaje;
    private String detalle;
    private Map<String, String> erroresValidacion;
    
    public ExceptionResponse() {
    
    }
    
    public ExceptionResponse(Date timestamp, String mensaje, String detalle) {
        this.timestamp = timestamp;
        this.mensaje = mensaje;
        this.detalle = detalle;
    }
    
    public ExceptionResponse(Date timestamp, String mensaje, String detalle,
            Map<String, String> erroresValidacion) {
        this.timestamp = timestamp;
        this.mensaje = mensaje;
        this.detalle = detalle;
        this.erroresValidacion = erroresValidacion;
    }
    
    public Date getTimeStamp() {
        return timestamp;
    }
    
    public void setTimeStamp(Date timestamp) {
        this.timestamp = timestamp;
    }

    public String getMensaje() {
        return mensaje;
    }
    
    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }
    
    public String getDetalle() {
        return detalle;
    }
    
    public void setDetalle(String detalle) {
        this.detalle = detalle;
    }
    
    public Map<String, String> detErroresValidacion() {
        return erroresValidacion;
    }
    
    public void setErroresValidacion(Map<String, String> erroresValidacion) {
        this.erroresValidacion = erroresValidacion;
    }
}
